function Footer() {
  return (
    <footer>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold">ABOUT</h5>
          <p>How Airbnb works</p>
          <p>Newsroom</p>
          <p>Investors</p>
          <p>Airbnb Plus</p>
          <p>Airbnb Lux</p>
        </div>

        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold">COMMUNITY</h5>
          <p>Accessibility</p>
          <p>This is not a real site</p>
          <p>It's a pretty awesome build</p>
          <p>Referrals accepted</p>
          <p>Papafam</p>
        </div>

        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold">HOST</h5>
          <p>Become a host</p>
          <p>Benefits</p>
          <p>Guests</p>
          <p>Lorem, ipsum.</p>
          <p>Join Now</p>
        </div>

        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold">SUPPORT</h5>
          <p>Help Center</p>
          <p>Trust & Safety</p>
          <p>Say Hi YouTube</p>
          <p>Covid Guidelines</p>
          <p>For the Win</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
