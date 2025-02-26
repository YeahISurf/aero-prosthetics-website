import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Components
import PageHeader from '../components/PageHeader';

const Legal = () => {
  const { t } = useTranslation();
  const { pageType } = useParams();
  
  // Redirect to privacy policy by default
  if (!pageType) {
    return <Navigate to="/legal/privacy" replace />;
  }
  
  // Set page metadata based on type
  let pageData = {
    title: '',
    subtitle: '',
    content: null
  };
  
  switch (pageType) {
    case 'privacy':
      pageData = {
        title: 'Privacy Policy',
        subtitle: 'How we collect, use, and protect your information',
        content: <PrivacyPolicy />
      };
      break;
    case 'terms':
      pageData = {
        title: 'Terms of Use',
        subtitle: 'Guidelines for using our website and services',
        content: <TermsOfUse />
      };
      break;
    case 'accessibility':
      pageData = {
        title: 'Accessibility Statement',
        subtitle: 'Our commitment to digital accessibility',
        content: <AccessibilityStatement />
      };
      break;
    default:
      return <Navigate to="/legal/privacy" replace />;
  }
  
  const breadcrumbs = [
    { label: 'Home', url: '/' },
    { label: pageData.title, url: null }
  ];
  
  return (
    <div>
      <PageHeader 
        title={pageData.title}
        subtitle={pageData.subtitle}
        breadcrumbs={breadcrumbs}
      />
      
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {pageData.content}
          </div>
        </div>
      </section>
    </div>
  );
};

const PrivacyPolicy = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 font-heading">Privacy Policy</h2>
      <p className="mb-4">Last Updated: February 25, 2025</p>
      
      <div className="space-y-8">
        <section>
          <h3 className="text-xl font-semibold mb-3 font-heading">Introduction</h3>
          <p className="mb-3">
            Aero Prosthetics ("we," "our," or "us") respects your privacy and is committed to protecting it through our compliance with this policy. This policy describes the types of information we may collect from you or that you may provide when you visit our website and our practices for collecting, using, maintaining, protecting, and disclosing that information.
          </p>
          <p>
            Please read this policy carefully to understand our policies and practices regarding your information. If you do not agree with our policies and practices, your choice is not to use our website. By accessing or using this website, you agree to this privacy policy.
          </p>
        </section>
        
        <section>
          <h3 className="text-xl font-semibold mb-3 font-heading">Information We Collect</h3>
          <p className="mb-3">We collect several types of information from and about users of our website, including information:</p>
          <ul className="list-disc pl-6 space-y-2 mb-3">
            <li>By which you may be personally identified, such as name, postal address, e-mail address, telephone number, or any other identifier by which you may be contacted online or offline ("personal information");</li>
            <li>That is about you but individually does not identify you, such as your internet connection, the equipment you use to access our website, and usage details;</li>
            <li>About your internet connection, the equipment you use to access our website, and usage details.</li>
          </ul>
          <p>We collect this information directly from you when you provide it to us and automatically as you navigate through the site.</p>
        </section>
        
        <section>
          <h3 className="text-xl font-semibold mb-3 font-heading">How We Use Your Information</h3>
          <p className="mb-3">We use information that we collect about you or that you provide to us, including any personal information:</p>
          <ul className="list-disc pl-6 space-y-2 mb-3">
            <li>To present our website and its contents to you;</li>
            <li>To provide you with information, products, or services that you request from us;</li>
            <li>To fulfill any other purpose for which you provide it;</li>
            <li>To carry out our obligations and enforce our rights arising from any contracts entered into between you and us;</li>
            <li>To notify you about changes to our website or any products or services we offer or provide though it;</li>
            <li>In any other way we may describe when you provide the information;</li>
            <li>For any other purpose with your consent.</li>
          </ul>
        </section>
        
        <section>
          <h3 className="text-xl font-semibold mb-3 font-heading">Disclosure of Your Information</h3>
          <p className="mb-3">We may disclose aggregated information about our users, and information that does not identify any individual, without restriction. We may disclose personal information that we collect or you provide as described in this privacy policy:</p>
          <ul className="list-disc pl-6 space-y-2 mb-3">
            <li>To our subsidiaries and affiliates;</li>
            <li>To contractors, service providers, and other third parties we use to support our business;</li>
            <li>To a buyer or other successor in the event of a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Aero Prosthetics' assets;</li>
            <li>To fulfill the purpose for which you provide it;</li>
            <li>For any other purpose disclosed by us when you provide the information;</li>
            <li>With your consent.</li>
          </ul>
          <p>We may also disclose your personal information:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>To comply with any court order, law, or legal process, including to respond to any government or regulatory request;</li>
            <li>To enforce or apply our terms of use and other agreements;</li>
            <li>If we believe disclosure is necessary or appropriate to protect the rights, property, or safety of Aero Prosthetics, our customers, or others.</li>
          </ul>
        </section>
        
        <section>
          <h3 className="text-xl font-semibold mb-3 font-heading">Data Security</h3>
          <p>
            We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. Unfortunately, the transmission of information via the internet is not completely secure. Although we do our best to protect your personal information, we cannot guarantee the security of your personal information transmitted to our website. Any transmission of personal information is at your own risk. We are not responsible for circumvention of any privacy settings or security measures contained on the website.
          </p>
        </section>
        
        <section>
          <h3 className="text-xl font-semibold mb-3 font-heading">Changes to Our Privacy Policy</h3>
          <p>
            It is our policy to post any changes we make to our privacy policy on this page. The date the privacy policy was last revised is identified at the top of the page. You are responsible for periodically visiting our website and this privacy policy to check for any changes.
          </p>
        </section>
        
        <section>
          <h3 className="text-xl font-semibold mb-3 font-heading">Contact Information</h3>
          <p>
            To ask questions or comment about this privacy policy and our privacy practices, contact us at: privacy@aeroprosthetics.com or 714-385-1000.
          </p>
        </section>
      </div>
    </div>
  );
};

const TermsOfUse = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 font-heading">Terms of Use</h2>
      <p className="mb-4">Last Updated: February 25, 2025</p>
      
      <div className="space-y-8">
        <section>
          <h3 className="text-xl font-semibold mb-3 font-heading">Acceptance of the Terms of Use</h3>
          <p>
            These terms of use are entered into by and between you and Aero Prosthetics ("Company," "we," or "us"). The following terms and conditions, together with any documents they expressly incorporate by reference, govern your access to and use of aeroprosthetics.com, including any content, functionality, and services offered on or through the website.
          </p>
          <p className="mt-3">
            Please read the Terms of Use carefully before you start to use the website. By using the website, you accept and agree to be bound and abide by these Terms of Use and our Privacy Policy, incorporated herein by reference. If you do not want to agree to these Terms of Use or the Privacy Policy, you must not access or use the website.
          </p>
        </section>
        
        <section>
          <h3 className="text-xl font-semibold mb-3 font-heading">Intellectual Property Rights</h3>
          <p>
            The website and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are owned by the Company, its licensors, or other providers of such material and are protected by United States and international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
          </p>
          <p className="mt-3">
            You must not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our website, except as follows:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-3">
            <li>Your computer may temporarily store copies of such materials in RAM incidental to your accessing and viewing those materials.</li>
            <li>You may store files that are automatically cached by your Web browser for display enhancement purposes.</li>
            <li>You may print or download one copy of a reasonable number of pages of the website for your own personal, non-commercial use and not for further reproduction, publication, or distribution.</li>
            <li>If we provide social media features with certain content, you may take such actions as are enabled by such features.</li>
          </ul>
        </section>
        
        <section>
          <h3 className="text-xl font-semibold mb-3 font-heading">Prohibited Uses</h3>
          <p>You may use the website only for lawful purposes and in accordance with these Terms of Use. You agree not to use the website:</p>
          <ul className="list-disc pl-6 space-y-2 mt-3">
            <li>In any way that violates any applicable federal, state, local, or international law or regulation.</li>
            <li>For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way by exposing them to inappropriate content, asking for personally identifiable information, or otherwise.</li>
            <li>To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail," "chain letter," "spam," or any other similar solicitation.</li>
            <li>To impersonate or attempt to impersonate the Company, a Company employee, another user, or any other person or entity.</li>
            <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the website, or which, as determined by us, may harm the Company or users of the website, or expose them to liability.</li>
          </ul>
        </section>
        
        <section>
          <h3 className="text-xl font-semibold mb-3 font-heading">Disclaimer of Warranties</h3>
          <p className="mb-3">
            You understand that we cannot and do not guarantee or warrant that files available for downloading from the internet or the website will be free of viruses or other destructive code. You are responsible for implementing sufficient procedures and checkpoints to satisfy your particular requirements for anti-virus protection and accuracy of data input and output, and for maintaining a means external to our site for any reconstruction of any lost data.
          </p>
          <p>
            TO THE FULLEST EXTENT PROVIDED BY LAW, WE WILL NOT BE LIABLE FOR ANY LOSS OR DAMAGE CAUSED BY A DISTRIBUTED DENIAL-OF-SERVICE ATTACK, VIRUSES, OR OTHER TECHNOLOGICALLY HARMFUL MATERIAL THAT MAY INFECT YOUR COMPUTER EQUIPMENT, COMPUTER PROGRAMS, DATA, OR OTHER PROPRIETARY MATERIAL DUE TO YOUR USE OF THE WEBSITE OR ANY SERVICES OR ITEMS OBTAINED THROUGH THE WEBSITE OR TO YOUR DOWNLOADING OF ANY MATERIAL POSTED ON IT, OR ON ANY WEBSITE LINKED TO IT.
          </p>
          <p className="mt-3">
            YOUR USE OF THE WEBSITE, ITS CONTENT, AND ANY SERVICES OR ITEMS OBTAINED THROUGH THE WEBSITE IS AT YOUR OWN RISK. THE WEBSITE, ITS CONTENT, AND ANY SERVICES OR ITEMS OBTAINED THROUGH THE WEBSITE ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.
          </p>
        </section>
        
        <section>
          <h3 className="text-xl font-semibold mb-3 font-heading">Limitation on Liability</h3>
          <p>
            TO THE FULLEST EXTENT PROVIDED BY LAW, IN NO EVENT WILL THE COMPANY, ITS AFFILIATES, OR THEIR LICENSORS, SERVICE PROVIDERS, EMPLOYEES, AGENTS, OFFICERS, OR DIRECTORS BE LIABLE FOR DAMAGES OF ANY KIND, UNDER ANY LEGAL THEORY, ARISING OUT OF OR IN CONNECTION WITH YOUR USE, OR INABILITY TO USE, THE WEBSITE, ANY WEBSITES LINKED TO IT, ANY CONTENT ON THE WEBSITE OR SUCH OTHER WEBSITES, INCLUDING ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO, PERSONAL INJURY, PAIN AND SUFFERING, EMOTIONAL DISTRESS, LOSS OF REVENUE, LOSS OF PROFITS, LOSS OF BUSINESS OR ANTICIPATED SAVINGS, LOSS OF USE, LOSS OF GOODWILL, LOSS OF DATA, AND WHETHER CAUSED BY TORT (INCLUDING NEGLIGENCE), BREACH OF CONTRACT, OR OTHERWISE, EVEN IF FORESEEABLE.
          </p>
        </section>
        
        <section>
          <h3 className="text-xl font-semibold mb-3 font-heading">Governing Law and Jurisdiction</h3>
          <p>
            All matters relating to the website and these Terms of Use, and any dispute or claim arising therefrom or related thereto, shall be governed by and construed in accordance with the internal laws of the State of California without giving effect to any choice or conflict of law provision or rule. Any legal suit, action, or proceeding arising out of, or related to, these Terms of Use or the website shall be instituted exclusively in the federal courts of the United States or the courts of the State of California, in each case located in Orange County, although we retain the right to bring any suit, action, or proceeding against you for breach of these Terms of Use in your country of residence or any other relevant country. You waive any and all objections to the exercise of jurisdiction over you by such courts and to venue in such courts.
          </p>
        </section>
        
        <section>
          <h3 className="text-xl font-semibold mb-3 font-heading">Changes to the Terms of Use</h3>
          <p>
            We may revise and update these Terms of Use from time to time in our sole discretion. All changes are effective immediately when we post them, and apply to all access to and use of the website thereafter. Your continued use of the website following the posting of revised Terms of Use means that you accept and agree to the changes.
          </p>
        </section>
        
        <section>
          <h3 className="text-xl font-semibold mb-3 font-heading">Contact Information</h3>
          <p>
            To ask questions or comment about the Terms of Use, contact us at: legal@aeroprosthetics.com or 714-385-1000.
          </p>
        </section>
      </div>
    </div>
  );
};

const AccessibilityStatement = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 font-heading">Accessibility Statement</h2>
      <p className="mb-4">Last Updated: February 25, 2025</p>
      
      <div className="space-y-8">
        <section>
          <h3 className="text-xl font-semibold mb-3 font-heading">Our Commitment to Accessibility</h3>
          <p>
            Aero Prosthetics is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards to ensure we provide equal access to all users.
          </p>
        </section>
        
        <section>
          <h3 className="text-xl font-semibold mb-3 font-heading">Standards and Compliance</h3>
          <p>
            We strive to meet the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards. These guidelines explain how to make web content more accessible for people with disabilities and more user-friendly for everyone.
          </p>
          <p className="mt-3">
            The guidelines have three levels of accessibility (A, AA, and AAA). We've chosen Level AA as our target for the Aero Prosthetics website.
          </p>
        </section>
        
        <section>
          <h3 className="text-xl font-semibold mb-3 font-heading">Accessibility Features</h3>
          <p className="mb-3">Our website includes the following accessibility features:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Semantic HTML structure with appropriate heading hierarchy</li>
            <li>Alternative text for all informative images</li>
            <li>Keyboard accessibility for all interactive elements</li>
            <li>Sufficient color contrast for text and important graphics</li>
            <li>Resizable text without loss of content or functionality</li>
            <li>Clear focus states for interactive elements</li>
            <li>ARIA landmarks and attributes when appropriate</li>
            <li>Responsive design that works across different screen sizes and devices</li>
          </ul>
        </section>
        
        <section>
          <h3 className="text-xl font-semibold mb-3 font-heading">Limitations and Alternatives</h3>
          <p>
            Despite our best efforts to ensure the accessibility of the Aero Prosthetics website, there may be some limitations. If you encounter any issues, please contact us so we can provide the information through alternative means.
          </p>
        </section>
        
        <section>
          <h3 className="text-xl font-semibold mb-3 font-heading">Feedback and Contact Information</h3>
          <p>
            We welcome your feedback on the accessibility of the Aero Prosthetics website. If you experience any accessibility barriers or have suggestions for improvement, please contact us at:
          </p>
          <ul className="list-none mt-3">
            <li>Email: accessibility@aeroprosthetics.com</li>
            <li>Phone: 714-385-1000</li>
            <li>Address: 1001 N Weir Canyon Road, Anaheim Hills, CA 92807</li>
          </ul>
          <p className="mt-3">
            We aim to respond to feedback within 2 business days.          
          </p>
        </section>
        
        <section>
          <h3 className="text-xl font-semibold mb-3 font-heading">Additional Resources</h3>
          <p className="mb-3">
            For more information about web accessibility, these resources may be helpful:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><a href="https://www.w3.org/WAI/standards-guidelines/wcag/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Web Content Accessibility Guidelines (WCAG)</a></li>
            <li><a href="https://www.w3.org/WAI/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Web Accessibility Initiative (WAI)</a></li>
            <li><a href="https://www.ada.gov/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Americans with Disabilities Act (ADA)</a></li>
          </ul>
        </section>
        
        <section>
          <h3 className="text-xl font-semibold mb-3 font-heading">Continuous Improvement</h3>
          <p>
            We are committed to ongoing accessibility improvements. We regularly review our website using automated tools and manual testing to identify and fix issues. Our website will be reviewed and tested on a quarterly basis for accessibility compliance and updates will be made as needed.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Legal;