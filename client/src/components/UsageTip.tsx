import { HiInformationCircle } from "react-icons/hi";
import { Alert } from "flowbite-react";
import { useState } from "react";

export default function UsageTip() {
    const [isAlertShow, setIsAlertShow] = useState(true)
    return (
        <Alert color="success"
            icon={HiInformationCircle}
            onDismiss={() => setIsAlertShow(false)}
            className={`${isAlertShow ? 'block' : 'hidden'}`}
        >
            <span className="font-medium">Usage!</span> Please Upload a File ...
        </Alert>
    )
}
