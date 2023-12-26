const Footer = () => {
    const year = new Date().getFullYear().toString();

    return (
        <div className="flex flex-col p-5 items-center">
            <p className="">{year} © hrushikedar33</p>
        </div>
    );
};

export default Footer;
