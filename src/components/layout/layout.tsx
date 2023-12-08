import React, {PropsWithChildren} from "react";

export const Layout: React.FC<PropsWithChildren> = (props) => {
    return <div className='max-h-screen min-h-screen overflow-y-auto relative flex bg-red-500'>
        <div className='min-h-max sticky top-0'>Header</div>
        <div className='flex-1'>{props.children}</div>
        <div className='min-h-max'>Footer</div>
    </div>
}
