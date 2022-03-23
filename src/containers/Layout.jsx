import React, { Component } from 'react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';


class Layout extends Component {
    render({ children }) {
        return (
            <div className='Layout'>
                <Header />
                {children}
                <Footer />
            </div>
        );
    }
}

export { Layout };