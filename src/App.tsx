import DefaultLayout from './layouts/DefaultLayout';

const App = () => {
    return (
        <DefaultLayout>
            <>
                <h1>
                    React with Typescript Project Starter -{' '}
                    {process.env.NODE_ENV}
                </h1>
                <h3>by {process.env.name}</h3>
            </>
        </DefaultLayout>
    );
};

export default App;
