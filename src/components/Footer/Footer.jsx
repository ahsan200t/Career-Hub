const Footer = () => {
    return (
        <footer className="p-10 bg-[#1A1919] text-base-content mt-10">
  <div className="footer max-w-6xl mx-auto">
  <aside>
    <h1 className="text-3xl font-extrabold text-white">CareerHub</h1>
    <p className="text-white w-[250px]">There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
  </aside> 
  <nav className="text-white">
    <h6 className="footer-title">Services</h6> 
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav className="text-white">
    <h6 className="footer-title">Company</h6> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav className="text-white">
    <h6 className="footer-title">Legal</h6> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
  </div>
</footer>
    );
};

export default Footer;