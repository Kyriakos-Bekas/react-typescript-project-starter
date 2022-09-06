import Navbar from '../components/Navbar/Navbar';
import { LayoutProps } from '../types/types';

const DefaultLayout = ({ children }: LayoutProps) => {
    return (
        <>
            <Navbar />

            <div className="container">{children}</div>
        </>
    );
};

export default DefaultLayout;
