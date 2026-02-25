import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen relative">
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        {/* Indigo — top-left */}
        <div className="absolute -top-40 -left-40 w-500px h-500px rounded-full opacity-[0.18]"
          style={{ background: 'radial-gradient(circle, #6366f1 0%, transparent 70%)' }} />
        {/* Violet — right-center */}
        <div className="absolute top-1/3 -right-32 w-96 h-96 rounded-full opacity-[0.14]"
          style={{ background: 'radial-gradient(circle, #a855f7 0%, transparent 70%)' }} />
        {/* Sky/Cyan — bottom-left */}
        <div className="absolute bottom-1/4 -left-20 w-80 h-80 rounded-full opacity-[0.10]"
          style={{ background: 'radial-gradient(circle, #22d3ee 0%, transparent 70%)' }} />
        {/* Rose — bottom-right */}
        <div className="absolute -bottom-20 right-1/4 w-72 h-72 rounded-full opacity-[0.10]"
          style={{ background: 'radial-gradient(circle, #f43f5e 0%, transparent 70%)' }} />
        {/* Extra: soft emerald mid-page */}
        <div className="absolute top-2/3 left-1/2 w-60 h-60 rounded-full opacity-[0.07]"
          style={{ background: 'radial-gradient(circle, #10b981 0%, transparent 70%)' }} />
      </div>

      <Navbar />
        <main className="grow">
          <Outlet />
        </main>
      <Footer />
    </div>
  );
};

export default Layout;
