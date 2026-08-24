import { useState, useEffect } from 'react';
import {
  Menu,
  X,
  ShoppingBag,
  Trash2,
  Plus,
  Minus,
  Share2,
} from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Sarees', href: '#sarees' },
  { label: 'Kurtis', href: '#kurtis' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

interface CartItem {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

const CART_KEY = 'keka-cart';

function getCart(): CartItem[] {
  try {
    const saved = localStorage.getItem(CART_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener('scroll', onScroll);

    const loadCart = () => {
      setCart(getCart());
    };

    loadCart();

    window.addEventListener('cartUpdated', loadCart);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('cartUpdated', loadCart);
    };
  }, []);

  const updateCart = (updatedCart: CartItem[]) => {
    setCart(updatedCart);
    localStorage.setItem(CART_KEY, JSON.stringify(updatedCart));

    // Notify ProductCards / Navbar instances
    window.dispatchEvent(new Event('cartUpdated'));
  };

  const increaseQuantity = (id: number) => {
    const updatedCart = cart.map((item) =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );

    updateCart(updatedCart);
  };

  const decreaseQuantity = (id: number) => {
    const updatedCart = cart
      .map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0);

    updateCart(updatedCart);
  };

  const removeItem = (id: number) => {
    const updatedCart = cart.filter((item) => item.id !== id);

    updateCart(updatedCart);
  };

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  /*
   * SHARE ORDER
   *
   * Uses the phone/browser native Share menu when available.
   * On desktop browsers without navigator.share,
   * it copies the complete order to the clipboard.
   */
  const shareOrder = async () => {
    if (cart.length === 0) {
      return;
    }
const orderLines = cart.map(
  (item) =>
    `• ${item.name} × ${item.quantity}\n  ₹${item.price.toLocaleString('en-IN')} each\n  ${item.link || window.location.origin}`
);

    );

    const message = [
      'Hello KeKa Collections! 👋',
      '',
      'I would like to order:',
      '',
      ...orderLines,
      '',
      `Total items: ${cartCount}`,
      `Total: ₹${cartTotal.toLocaleString('en-IN')}`,
      '',
      'Thank you!',
    ].join('\n');

    try {
      // Mobile / supported browsers
      if (navigator.share) {
        await navigator.share({
          title: 'KeKa Collections Order',
          text: message,
        });

        return;
      }

      // Desktop fallback
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(message);

        window.alert(
          'Order details copied! You can paste them into WhatsApp, Messenger, email, or any other app.'
        );

        return;
      }

      // Final fallback
      window.alert(message);
    } catch (error) {
      // Ignore when the user simply closes the share dialog.
      if (
        error instanceof DOMException &&
        error.name === 'AbortError'
      ) {
        return;
      }

      // Try clipboard if native sharing fails.
      try {
        if (navigator.clipboard) {
          await navigator.clipboard.writeText(message);

          window.alert(
            'Order details copied! You can paste them into WhatsApp or another messaging app.'
          );

          return;
        }
      } catch {
        // Continue to final fallback.
      }

      window.alert(message);
    }
  };

  return (
    <>
      {/* =========================
          NAVBAR
      ========================== */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-cream-200 shadow-md shadow-forest-500/10 backdrop-blur-sm'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">

          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <img
              src="/KeKa-Collections/logo.png"
              alt="KeKa Collections"
              className="h-12 w-auto object-contain"
            />

            <div>
              <h1 className="font-display text-2xl text-forest-600">
                KeKa
              </h1>

              <p className="text-xs tracking-[0.3em] uppercase text-gold-500">
                Collections
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="text-sm font-medium text-forest-600 hover:text-gold-500 tracking-wide transition-colors duration-200 relative group"
                >
                  {label}

                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gold-400 group-hover:w-full transition-all duration-300" />
                </a>
              </li>
            ))}
          </ul>

          {/* Cart Button */}
          <button
            type="button"
            onClick={() => setCartOpen(true)}
            className="relative flex items-center gap-2 bg-forest-600 text-cream-100 px-5 py-2.5 text-sm font-medium tracking-wide hover:bg-forest-700 transition-colors duration-200 rounded-sm"
          >
            <ShoppingBag size={15} />

            <span>Cart</span>

            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 min-w-[20px] h-5 px-1 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-forest-600"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* =========================
            MOBILE MENU
        ========================== */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            open
              ? 'max-h-96 opacity-100'
              : 'max-h-0 opacity-0'
          } bg-cream-200 border-t border-gold-200`}
        >
          <ul className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  onClick={() => setOpen(false)}
                  className="text-forest-600 font-medium text-base hover:text-gold-500 transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}

            <li>
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  setCartOpen(true);
                }}
                className="inline-flex items-center gap-2 bg-forest-600 text-cream-100 px-5 py-2.5 text-sm font-medium"
              >
                <ShoppingBag size={15} />

                Cart

                {cartCount > 0 && ` (${cartCount})`}
              </button>
            </li>
          </ul>
        </div>
      </header>

      {/* =========================
          CART DRAWER
      ========================== */}
      {cartOpen && (
        <div
          className="fixed inset-0 z-[200] bg-black/60"
          onClick={() => setCartOpen(false)}
        >
          <div
            className="absolute right-0 top-0 h-full w-full max-w-md bg-cream-50 shadow-2xl flex flex-col"
            onClick={(event) => event.stopPropagation()}
          >

            {/* Cart Header */}
            <div className="flex items-center justify-between p-5 border-b border-gold-200">
              <div>
                <h2 className="font-display text-2xl text-forest-600">
                  Your Cart
                </h2>

                <p className="text-xs text-forest-700/60 mt-1">
                  {cartCount}{' '}
                  {cartCount === 1 ? 'item' : 'items'}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setCartOpen(false)}
                className="w-9 h-9 rounded-full bg-cream-200 text-forest-900 flex items-center justify-center hover:bg-gold-400 transition-colors"
                aria-label="Close cart"
              >
                <X size={20} />
              </button>
            </div>

            {/* =========================
                CART ITEMS
            ========================== */}
            <div className="flex-1 overflow-y-auto p-5">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <ShoppingBag
                    size={48}
                    className="text-gold-400 mb-4"
                  />

                  <h3 className="font-display text-xl text-forest-600 mb-2">
                    Your cart is empty
                  </h3>

                  <p className="text-sm text-forest-700/60">
                    Add some beautiful pieces to your cart.
                  </p>
                </div>
              ) : (
                <div className="space-y-5">
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="flex gap-4 border-b border-gold-200 pb-5"
                    >
                      {/* Product Image */}
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-24 object-cover bg-cream-200"
                      />

                      <div className="flex-1">

                        {/* Product Name */}
                        <h3 className="text-sm font-semibold text-forest-600 leading-snug">
                          {item.name}
                        </h3>

                        {/* Product Price */}
                        <p className="text-sm font-bold text-red-600 mt-2">
                          ₹{item.price.toLocaleString('en-IN')}
                        </p>

                        {/* Quantity + Remove */}
                        <div className="flex items-center justify-between mt-3">

                          {/* Quantity Controls */}
                          <div className="flex items-center border border-gold-200">

                            {/* Decrease */}
                            <button
                              type="button"
                              onClick={() =>
                                decreaseQuantity(item.id)
                              }
                              className="w-8 h-8 flex items-center justify-center text-forest-600 hover:bg-gold-100"
                              aria-label={`Decrease quantity of ${item.name}`}
                            >
                              <Minus size={14} />
                            </button>

                            {/* Quantity */}
                            <span className="w-8 text-center text-sm font-semibold">
                              {item.quantity}
                            </span>

                            {/* Increase */}
                            <button
                              type="button"
                              onClick={() =>
                                increaseQuantity(item.id)
                              }
                              className="w-8 h-8 flex items-center justify-center text-forest-600 hover:bg-gold-100"
                              aria-label={`Increase quantity of ${item.name}`}
                            >
                              <Plus size={14} />
                            </button>

                          </div>

                          {/* Remove */}
                          <button
                            type="button"
                            onClick={() => removeItem(item.id)}
                            className="text-red-500 hover:text-red-700"
                            aria-label={`Remove ${item.name}`}
                          >
                            <Trash2 size={17} />
                          </button>
                        </div>

                        {/* Item Total */}
                        <p className="text-xs text-forest-700/60 mt-2">
                          Item total: ₹
                          {(
                            item.price * item.quantity
                          ).toLocaleString('en-IN')}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* =========================
                CART TOTAL + SHARE ORDER
            ========================== */}
            {cart.length > 0 && (
              <div className="border-t border-gold-200 p-5 bg-cream-100 space-y-4">

                {/* Total */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-sm font-semibold text-forest-600">
                      Total
                    </span>

                    <p className="text-xs text-forest-700/60 mt-1">
                      {cartCount}{' '}
                      {cartCount === 1 ? 'item' : 'items'}
                    </p>
                  </div>

                  <span className="text-xl font-bold text-red-600">
                    ₹{cartTotal.toLocaleString('en-IN')}
                  </span>
                </div>

                {/* Share Order Button */}
                <button
                  type="button"
                  onClick={shareOrder}
                  className="w-full inline-flex items-center justify-center gap-2 bg-forest-600 text-cream-100 px-5 py-3 text-sm font-semibold tracking-wide hover:bg-forest-700 transition-colors rounded-sm"
                >
                  <Share2 size={17} />

                  Share Order
                </button>

                {/* Small helper text */}
                <p className="text-center text-[11px] text-forest-700/50">
                  Share your selected products and quantities
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
