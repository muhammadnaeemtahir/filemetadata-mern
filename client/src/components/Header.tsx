
import { Navbar, DarkThemeToggle } from "flowbite-react";

interface Props {
    title: string;
    subtitle: string;
}

export default function Header({ title = "API Project", subtitle = "File Metadata Microservice" }: Props) {
    return (
        <Navbar className="dark:bg-gray-700 bg-gray-50">
            <Navbar.Brand href="https://flowbite-react.com">
                <span>
                    <h1 className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">{title}</h1>
                    <p className="dark:text-white">{subtitle}</p>
                </span>
            </Navbar.Brand>
            <div className="flex md:order-2">
                <DarkThemeToggle />
            </div>
        </Navbar>
    );
}
