export default function Terms() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-serif text-secondary mb-6 text-center">Terms & Conditions</h1>
        <p className="text-center text-muted-foreground mb-12">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
        
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-border prose prose-stone max-w-none text-muted-foreground prose-headings:font-serif prose-headings:text-secondary">
          <h2>1. General Booking Policy</h2>
          <p>
            All appointments are subject to availability. We recommend booking in advance, especially for bridal services and weekend slots. You will receive a confirmation message upon successful booking.
          </p>

          <h2>2. Cancellations & Rescheduling</h2>
          <p>
            We respect your time and ask that you respect ours. Please provide at least 24 hours notice for any cancellations or changes to your appointment. For bridal bookings, a 48-hour notice is required. Late cancellations may be subject to a fee.
          </p>

          <h2>3. Arrival Time</h2>
          <p>
            Please aim to arrive 10 minutes before your scheduled appointment to ensure a relaxed experience. Late arrivals may result in a shortened service time to avoid delaying the next client.
          </p>

          <h2>4. Payment</h2>
          <p>
            We accept cash and major credit/debit cards. Prices for services are subject to change without prior notice, though we will honor the price quoted at the time of your booking.
          </p>

          <h2>5. Right to Refuse Service</h2>
          <p>
            Our salon staff has the right to refuse service to anyone demonstrating inappropriate behavior, intoxication, or any condition that may pose a health or safety risk to our staff or other clients.
          </p>
          
          <h2>6. Contact</h2>
          <p>
            For any queries regarding these terms, please contact us at [Email Address] or call [Phone Number].
          </p>
        </div>
      </div>
    </div>
  );
}
