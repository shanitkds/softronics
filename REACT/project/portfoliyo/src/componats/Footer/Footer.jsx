import React from 'react'

function Footer() {
    return (
        <div>
            <footer className=" bg-blue-500 text-white text-center py-3 text-sm">
                © {new Date().getFullYear()} Your Company Name. All rights reserved.
            </footer>
        </div>
    )
}

export default Footer
