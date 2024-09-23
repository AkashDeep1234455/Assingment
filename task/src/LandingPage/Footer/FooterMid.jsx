import "./FooterMid.css";

export default function FooterMid() {
  const integrations = [
    "Shopify",
    "Etsy",
    "eBay",
    "Amazon",
    "TikTok Shop",
    "PrestaShop",
    "BigCommerce",
    "Wix",
    "WooCommerce",
    "Squarespace",
    "Printify API",
    "Printify Pop-Up Store",
    "Shutterstock",
  ];

  const discover = [
    "Blog",
    "Guides",
    "Products",
    "Etsy print-on-demand",
    "Shopify print-on-demand",
    "Woocommerce print-on-demand",
    "Wix print-on-demand",
    "Squarespace print-on-demand",
    "Make Your Own Shirt",
    "Brands",
    "Pricing",
    "Shipping Rates",
    "Mockup Generator",
  ];

  const startSelling = [
    "Custom T-shirts",
    "Custom Hoodies",
    "Custom Mugs",
    "Custom Socks",
    "Custom Backpacks",
    "Custom Branding",
    "Sell on Etsy",
    "Sell on Social Media",
    "Free T-shirt Designs",
    "Custom Products",
    "Custom All-Over-Print Hoodies",
    "Start a Clothing Line",
    "Start POD Business",
    "Bulk Orders",
    "Transferring To Printify",
  ];

  const printify = [
    "Print on Demand",
    "Print Providers",
    "Experts Program",
    "Printify Express Delivery",
    "Become a Partner",
    "About",
    "Printify Quality Promise",
    "Jobs",
    "Webinars",
    "Printing Profits Podcast",
    "Contact Us",
    "Affiliate",
    "Contact Sales",
    "POD Glossary",
    "Network Fulfillment Status",
    "Merchant Protection",
  ];

  return (
    <div className="FooterMid">
      <div className="FooterMidInner">
        <div className="FooterSection Integrations">
          <p>Integrations</p>
          {integrations.map((integration, index) => (
            <a key={index} href="#">
              {integration}
            </a>
          ))}
        </div>

        <div className="FooterSection Discover">
          <p>Discover</p>
          {discover.map((item, index) => (
            <a key={index} href="#">
              {item}
            </a>
          ))}
        </div>
      </div>
      <div className="FooterMidInner">
        <div className="FooterSection StartSelling">
          <p>Start selling</p>
          {startSelling.map((item, index) => (
            <a key={index} href="#">
              {item}
            </a>
          ))}
        </div>

        <div className="FooterSection Printify">
          <p>Printify</p>
          {printify.map((item, index) => (
            <a key={index} href="#">
              {item}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
