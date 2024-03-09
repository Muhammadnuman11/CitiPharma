import { toast } from "react-toastify";

window.notify = (msg, type) => {

    const options = {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    }

    switch (type) {
        case "success":
            toast.success(msg, options)
            break;
        case "error":
            toast.error(msg, options)
            break;
        case "info":
            toast.info(msg, options)
            break;
        case "warning":
            toast.warning(msg, options)
            break;

        default:
            toast(msg, options)
    }
}