import React from 'react';

export default function Footer(props) {
    return (
        <footer className='flex flex-row gap-2 justify-center py-4'>
            <a href="https://github.com/BENNNZO/wynn-sphunter" target='_blank'>
                <img 
                    src={process.env.PUBLIC_URL + "/svg/github.svg"} 
                    alt="Github Logo" 
                    title='Github Repo' 
                    className='w-10 h-10 border border-zinc-900 p-1 rounded-md cursor-pointer'
                />
            </a>
            <img
                onClick={e => {
                    e.preventDefault()

                    window.scrollTo(0, 0)
                }}
                src={process.env.PUBLIC_URL + "/svg/up_arrow.svg"} 
                alt="Up Arrow" 
                title='Back To Top' 
                className='w-10 h-10 border border-zinc-900 p-1 rounded-md cursor-pointer'
            />
            <img
                onClick={e => {
                    e.preventDefault()

                    window.scrollTo(0, 0)

                    if (!props.loaded) props.setUpdate(props.update + 1)
                }}
                src={process.env.PUBLIC_URL + "/svg/refresh.svg"} 
                alt="Reload" 
                title='Refresh Data' 
                className={`w-10 h-10 border border-zinc-900 p-2 rounded-md ${props.loaded ? 'cursor-not-allowed' : 'cursor-pointer'}`}
            />
        </footer>
    )
}