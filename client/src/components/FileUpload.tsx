
import { useState } from "react";
import { FileInput, Label, Kbd, Table } from "flowbite-react";
import { FallingLines } from 'react-loader-spinner'

export default function FileUpload() {
    const [fileInfo, setFileInfo] = useState({});
    const [isLoading, setIsloading] = useState(false);

    const ProcessFile = async (file: File) => {
        setFileInfo({})

        try {
            setIsloading(true)

            const data = new FormData();
            data.append('upfile', file);
            const response = await fetch('http://localhost:5000/api/fileanalyse', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json'
                },
                body: data
            });
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            const info = await response.json();
            setFileInfo(info);
            setIsloading(false)

        } catch (error) {
            console.error(error.message);
            setIsloading(false)
        }
    }


    return (
        <div className="flex w-full items-center justify-center mt-6">
            <Label
                htmlFor="dropzone-file"
                className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
                <div className="flex flex-col items-center justify-center pb-6 pt-5">

                    {
                        isLoading ? (
                            <FallingLines
                                color="#b9edd7"
                                width="100"
                                visible={true}
                            />
                        ) : (
                            <>
                                <svg
                                    className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 20 16"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                    />
                                </svg>
                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                    <span className="font-semibold">Click to upload file</span> or drag and drop
                                </p>
                                {
                                    fileInfo && Object.keys(fileInfo).length > 0 && (
                                        <Table>
                                            <Table.Body className="divide-y">
                                                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                        <Kbd>Name</Kbd>
                                                    </Table.Cell>
                                                    <Table.Cell>{fileInfo.name}</Table.Cell>
                                                </Table.Row>
                                                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                        <Kbd>Type</Kbd>
                                                    </Table.Cell>
                                                    <Table.Cell>{fileInfo.type}</Table.Cell>
                                                </Table.Row>
                                                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                        <Kbd>Size</Kbd>
                                                    </Table.Cell>
                                                    <Table.Cell>{fileInfo.size}</Table.Cell>
                                                </Table.Row>
                                            </Table.Body>
                                        </Table>
                                    )
                                }
                            </>
                        )
                    }
                </div>
                <FileInput id="dropzone-file" max={1} className="hidden" onChange={(e) => ProcessFile(e.target.files[0])} />
            </Label>
        </div>
    )
}
