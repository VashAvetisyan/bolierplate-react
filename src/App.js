import React from 'react'

import Layout from 'components/Layout/Layout'
import Container from 'containers/Container/Container'
import Header from 'components/Header/Header'


function App() {
    return (
        <div className="App">
            <Header />
            <Layout >
                <Container />
            </Layout>
        </div>
    );
}

export default App;
