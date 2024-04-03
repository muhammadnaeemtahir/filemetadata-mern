import Header from "../components/Header"
import UsageTip from "../components/UsageTip"
import FileUpload from "../components/FileUpload"

export default function Home() {
    return (
        <>
            <Header title="API Project" subtitle="File Metadata Microservice" />
            <main className="container mx-auto mt-6 md:px-0 px-2">
                <UsageTip />
                <FileUpload />
            </main>
        </>
    )
}

