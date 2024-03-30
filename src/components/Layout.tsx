import { ToastContainer } from 'react-toastify';
import { Outlet } from 'react-router-dom';
import AppProvider from '../contexts/AppProvider';
import 'react-toastify/dist/ReactToastify.css';

const Layout = () => {
  return (
    <>
      <header></header>
      <AppProvider>
        <main className="bg-gray-800 min-h-screen text-white p-5">
          <Outlet/>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            closeOnClick
            theme="dark"
          />
        </main>
      </AppProvider>
      <footer></footer>
    </>
  );
};

export default Layout;
