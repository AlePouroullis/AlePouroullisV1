export default function Footer() {
  return (
    <footer>
      <p className="copyright">&copy; 2022 Alexandros Pouroullis</p>
      <p className="last-modified">Last modified: {process.env.LAST_MODIFIED}</p>
    </footer>
  );
}