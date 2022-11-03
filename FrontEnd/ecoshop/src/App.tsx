import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer } from './components/footer/Footer';
import { Navbar } from './components/navbar/Navbar';
import { Home } from './pages/home/Home';
import { Login } from './pages/login/Login';
import { Cadastro } from './pages/cadastro/Cadastro';
import { NotFound } from './pages/notfound/Notfound';
import { Comprar } from './components/produtos/comprar/Comprar';
import { Provider } from 'react-redux';
import store from './store/store';
import { Vender } from './components/produtos/vender/Vender';
import { VenderResp } from './components/produtos/vender/VenderResp';
import { Sobre } from './pages/sobre/Sobre';

function App() {

  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/login' element={<Login />} />
            <Route path='/cadastro' element={<Cadastro />} />
            <Route path='/home' element={<Home />} />
            <Route path='/sobre' element={<Sobre />} />
            <Route path='/comprar' element={<Comprar />} />
            <Route path='/vender' element={<Vender />} />
            <Route path='/deletarProduto/:id' element={ <Vender />} />
            <Route path='/venderResp' element={<VenderResp />} />
            <Route path='/deletarProdutoResp/:id' element={ <VenderResp />} />
            <Route path='/editarProduto/:id' element={ <Vender />} />
            <Route path='/editarProdutoResp/:id' element={ <VenderResp />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
