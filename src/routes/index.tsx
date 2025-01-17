import { Routes, Route } from 'react-router-dom';
import { Home } from '@/pages/home/index';
import { Header } from '@/pages/header/index';
import { Defaultlayout } from '@/layout/defaultLayout';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Defaultlayout />}>
        <Route index element={<Home />} />
        <Route path="header" element={<Header />} />
      </Route>
    </Routes>
  );
}