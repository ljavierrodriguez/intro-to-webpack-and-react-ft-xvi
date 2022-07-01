import React from 'react';
import Carousel from './components/Carousel';
import Form from './components/Form';
import List from './components/List';
import Navbar from './components/Navbar';

const App = () => {


    const languages = [
        'PHP',
        'JAVA',
        'PYTHON',
        'JAVASCRIPT',
        'RUBY',
        'C#',
        'C++',
        'PASCAL'
    ]

    const images = [
        { imageSrc: 'https://images.unsplash.com/photo-1656628228059-29165b22d48f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1186&q=80' },
        { imageSrc: 'https://images.unsplash.com/photo-1656231722980-8a7322d46064?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1062&q=80' },
        { imageSrc: 'https://images.unsplash.com/photo-1656657284945-bf5a703f8a97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' },
    ]

    const onSubmit = e => {
        //e.preventDefault();
    }

    return (
        <>
            <Navbar />
            <Carousel images={images} />
            <List languages={languages} />
            <Form onSubmit={onSubmit}>
                <h1>Formulario de Login</h1>
                <button className="btn btn-info">Enviar</button>
            </Form>
        </>
    )
}

export default App;



{/* <Layout>
    <Nabvar />
    <div className="container">
        <Main />
    </div>
    <Footer />
</Layout> */}