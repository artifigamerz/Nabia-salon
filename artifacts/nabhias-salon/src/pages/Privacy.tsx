export default function Privacy() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-serif text-secondary mb-6 text-center">Privacy Policy</h1>
        <p className="text-center text-muted-foreground mb-12">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
        
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-border prose prose-stone max-w-none text-muted-foreground prose-headings:font-serif prose-headings:text-secondary">
          <h2>1. Introduction</h2>
          <p>
            Welcome to Nabhia's Salon. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website or salon.
          </p>

          <h2>2. Data We Collect</h2>
          <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
          <ul>
            <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
            <li><strong>Contact Data:</strong> includes billing address, delivery address, email address and telephone numbers.</li>
            <li><strong>Appointment Data:</strong> includes details about services you have booked, dates, and times.</li>
          </ul>

          <h2>3. How We Use Your Data</h2>
          <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
          <ul>
            <li>To process and manage your appointment bookings.</li>
            <li>To communicate with you regarding your appointments or inquiries.</li>
            <li>To send you marketing communications (only if you have opted in).</li>
            <li>To improve our website, services, marketing, and customer relationships.</li>
          </ul>

          <h2>4. Data Security</h2>
          <p>
            We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed.
          </p>

          <h2>5. Contact Us</h2>
          <p>
            If you have any questions about this privacy policy or our privacy practices, please contact us at:<br/>
            Email: [Email Address]<br/>
            Phone: [Phone Number]
          </p>
        </div>
      </div>
    </div>
  );
}
