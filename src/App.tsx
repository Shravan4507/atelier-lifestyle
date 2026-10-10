import { useState, useEffect } from 'react';
import type { PageId, Product, CartItem } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { ProductModal } from './components/ProductModal';
import { HomePage } from './pages/HomePage';
import { CollectionPage } from './pages/CollectionPage';
import { StoryPage } from './pages/StoryPage';
import { ConciergePage } from './pages/ConciergePage';
import './App.css';

export function App() {
  // Page routing state
  const [activePage, setActivePage] = useState<PageId>(() => {
    const hash = window.location.hash.replace('#', '') as PageId;
    if (['home', 'collection', 'story', 'concierge'].includes(hash)) {
      return hash;
    }
    return 'home';
  });

  // Global currency selector state
  const [currency, setCurrency] = useState<string>('USD');

  // Shopping bag state with localStorage recovery
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('atelier_vahl_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Drawer & Modal states
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [inspectedProduct, setInspectedProduct] = useState<Product | null>(null);

  // Floating notification toast
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync hash with active page
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      if (['home', 'collection', 'story', 'concierge'].includes(hash)) {
        setActivePage(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update hash when page changes
  const handleNavigate = (page: PageId) => {
    setActivePage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Save cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('atelier_vahl_cart', JSON.stringify(cartItems));
    } catch (e) {
      console.error(e);
    }
  }, [cartItems]);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  const handleAddToCart = (product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
    showToast(`Added ${product.name} to acquisition ledger`);
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="atelier-app-root">
      {/* Flagship Navigation Header */}
      <Navbar
        activePage={activePage}
        onNavigate={handleNavigate}
        currency={currency}
        onCurrencyChange={setCurrency}
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Main Page Content (Maximum 4 Pages) */}
      <main id="main-content" className="site-main-content">
        <div key={activePage} className="page-transition-container">
          {activePage === 'home' && (
            <HomePage
              onNavigate={handleNavigate}
              currency={currency}
              onInspectProduct={(prod) => setInspectedProduct(prod)}
              onAddToCart={handleAddToCart}
            />
          )}

          {activePage === 'collection' && (
            <CollectionPage
              currency={currency}
              onInspectProduct={(prod) => setInspectedProduct(prod)}
              onAddToCart={handleAddToCart}
            />
          )}

          {activePage === 'story' && (
            <StoryPage onNavigate={handleNavigate} />
          )}

          {activePage === 'concierge' && (
            <ConciergePage onNavigate={handleNavigate} />
          )}
        </div>
      </main>

      {/* Flagship Editorial Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Sliding Acquisition Bag Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        currency={currency}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        onNavigateToCollection={() => handleNavigate('collection')}
      />

      {/* Product Detailed Technical Specification Sheet Modal */}
      <ProductModal
        product={inspectedProduct}
        onClose={() => setInspectedProduct(null)}
        currency={currency}
        onAddToCart={handleAddToCart}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Tactile System Toast */}
      {toastMessage && (
        <div className="system-toast-banner" role="status">
          <span className="toast-dot" />
          <span className="toast-text">{toastMessage}</span>
          <button
            type="button"
            className="toast-view-bag-btn"
            onClick={() => {
              setToastMessage(null);
              setIsCartOpen(true);
            }}
          >
            Inspect Bag
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
