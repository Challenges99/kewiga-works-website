import { LegalPage } from '@/components/LegalDraft';
import { Fill } from '@/components/Fill';
import { COMPANY, SITE } from '@/lib/site';

export const metadata = {
  title: 'Privacy Policy | Kewiga Works',
  description: 'How KEWIGA WORKS LTD collects, uses and protects personal data from customers, artisan applicants, guarantors and referrers, under the Nigeria Data Protection Act 2023.',
  alternates: { canonical: '/privacy/' },
};

export default function Privacy() {
  return (
    <LegalPage title="Privacy Policy" updated="31 October 2026">
      <h2>1. Who we are</h2>
      <p>{COMPANY.legalName} (RC {COMPANY.rcNumber}), trading as Kewiga Works (“we”, “us”), is the data controller for personal data collected through kewigaworks.com and our WhatsApp line.
        {COMPANY.registeredAddress ? <> Our registered office is {COMPANY.registeredAddress}.</> : <> <Fill what="registered office address" /></>}
        {' '}Contact us about privacy at <a href={`mailto:${SITE.email}`}>{SITE.email}</a> or on WhatsApp at {SITE.phoneDisplay}.</p>

      <h2>2. What we collect</h2>
      <ul>
        <li><b>Customers:</b> your name, phone/WhatsApp number, area and address in Abuja, your plan, details and photos of repairs, job records, payment records and any messages you send us.</li>
        <li><b>Artisan applicants and artisans:</b> name, phone, trade, experience, area, tools, ID document details, trade-test results, job and payment records, and bank details for payouts.</li>
        <li><b>Guarantors:</b> name and phone number, given to us by the artisan applicant with the guarantor’s agreement.</li>
        <li><b>Referrers:</b> name and phone number, and bank details if you choose a bank-transfer referral reward.</li>
      </ul>
      <p>Our website forms do not store your details on our servers. They prepare a WhatsApp message that you choose whether to send.</p>

      <h2>3. Why we use it, and our legal basis</h2>
      <ul>
        <li><b>To provide your plan</b> (booking visits, sending an artisan your address, invoicing): necessary to perform our contract with you.</li>
        <li><b>To vet artisans</b> (ID, guarantor and trade checks): our legitimate interest in keeping customers safe, and the guarantor’s consent to be contacted.</li>
        <li><b>To pay artisans and referral rewards, and keep accounts:</b> contract and legal obligations (tax and company records).</li>
        <li><b>To handle complaints, guarantee claims and damage claims:</b> contract and legitimate interest.</li>
        <li><b>To send service updates:</b> contract. We only send marketing messages if you agree, and you can stop them at any time.</li>
      </ul>

      <h2>4. Who receives it</h2>
      <ul>
        <li><b>Artisans</b> we send to your job receive your first name, address, phone number and the job details, only for that job.</li>
        <li><b>WhatsApp (Meta Platforms)</b> carries our messages. WhatsApp’s own privacy policy applies to its service.</li>
        <li><b>Our website host (Netlify)</b> processes basic technical data such as IP addresses to serve the website.</li>
        <li><b>Banks and payment providers</b> process payments.</li>
        <li><b>Professional advisers and authorities</b> where the law requires it.</li>
      </ul>
      <p>We never sell personal data.</p>

      <h2>5. Data leaving Nigeria</h2>
      <p>WhatsApp and our website host store data on servers outside Nigeria. We rely on these providers’ safeguards and only use services that offer an adequate level of protection, as the Nigeria Data Protection Act 2023 requires.</p>

      <h2>6. How long we keep it</h2>
      <ul>
        <li>Customer and job records: for as long as you subscribe, then 6 years for accounting and legal purposes.</li>
        <li>Unsuccessful artisan applications, including guarantor details: deleted within 3 months.</li>
        <li>Active artisans’ and guarantors’ details: while the artisan works with us, then 6 years.</li>
        <li>WhatsApp chats not needed for any of the above: reviewed and deleted regularly.</li>
      </ul>

      <h2>7. Your rights</h2>
      <p>You can ask to see the personal data we hold about you, correct it, delete it, restrict or object to how we use it, withdraw consent, or receive a copy in a portable format. Message us on WhatsApp or email us and we will respond within the time the law allows. If you are unhappy with our response, you can complain to the <b>Nigeria Data Protection Commission (NDPC)</b>.</p>

      <h2>8. Cookies and analytics</h2>
      <p>Our website does not use advertising or analytics cookies, and our fonts are served from our own domain. If we add analytics later, we will update this policy and ask for your consent first.</p>

      <h2>9. Security</h2>
      <p>We limit access to personal data to people who need it, use strong passwords on our accounts and devices, and share only what each artisan needs for a job.</p>

      <h2>10. Changes</h2>
      <p>We will post any changes on this page with a new “last updated” date, and tell subscribers about significant changes on WhatsApp.</p>
    </LegalPage>
  );
}
