import toast from 'react-hot-toast'

export const toastSuccess = (msg) => {
    toast.success(msg, {
        duration: 2000,
        position: 'top-right',
        iconTheme: {
            primary: 'rgb(16, 211, 16)',
            secondary: '#fff',
        },
    style: {
        padding: "1rem"
    }});
}

export const toastError = (msg) => {
    toast.error(msg, {
        duration: 2000,
        position: 'top-right',
        iconTheme: {
            primary: 'rgb(248, 63, 63)',
            secondary: '#fff',
        },
    style: {
        padding: "1rem"
    }})
}