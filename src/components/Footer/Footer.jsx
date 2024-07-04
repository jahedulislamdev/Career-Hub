
const Footer = () => {
    return (
        <div className="rounded">
            <footer className="footer bg-base-200 text-base-content p-10 rounded">
                <aside>
                    <p className="font-bold text-xl">Career Hub</p>
                    <p>
                        There are many variations of passages of Lorem Ipsum <br />
                        but the majority have suffered alteration in some form.
                    </p>
                    <img src="https://i.postimg.cc/ZqZ8rqt3/social.png" className="w-1/3 mt-3" />
                </aside>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;