export default function Footer() {
  return (
    <footer className="bg-[#183d1c] text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-lg font-semibold mb-2">Golden Basket</h2>
          <p className="text-sm">Empowering communities with sustainable agriculture.</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:text-[#f6c046]">About</a></li>
            <li><a href="#" className="hover:text-[#f6c046]">Products</a></li>
            <li><a href="#" className="hover:text-[#f6c046]">Media</a></li>
            <li><a href="#" className="hover:text-[#f6c046]">Jobs</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact</h3>
          <p className="text-sm">Email: info@goldenbasket.com</p>
          <p className="text-sm">Phone: +256 700 000 000</p>
          <p className="text-sm">Location: Kampala, Uganda</p>
        </div>
      </div>
      <p className="text-center text-xs mt-8">© {new Date().getFullYear()} Golden Basket Ltd. All rights reserved.</p>
    </footer>
  );
}
