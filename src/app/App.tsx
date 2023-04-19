import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import './styles/index.scss';

interface AppProps {
  className?: string
}

export const App: FC<AppProps> = ({ className }) => {
  return (
        <div className="app">
            <Routes>
                <Route path={'/'} />
                <Route path={'/about'} />
            </Routes>
        </div>
  );
};
