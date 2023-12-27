import React from 'react';

type Props = {};

const Contact = (props: Props) => {
    return (
        <div className="group flex flex-col mb-16">
            <div className="text-3xl font-bold">
                <span className="group-hover:text-orange-400">Contact </span>
                <span className="text-orange-400 group-hover:text-inherit">
                    Me
                </span>
            </div>

            <hr className="mt-2 border-2" />
            <div>
                <p className="p-5">tset</p>
            </div>
        </div>
    );
};

export default Contact;
