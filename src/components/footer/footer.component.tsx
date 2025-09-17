export const Footer = () => {
  return (
    <footer className="py-10 px-6 text-center text-sm text-muted">
      <div className="max-w-4xl mx-auto">
        <div className="mb-4">
          © {new Date().getFullYear()} Menyaga Enyo Israel
        </div>
        <div className="flex items-center justify-center gap-4">
          <a>GitHub</a>
          <a>LinkedIn</a>
          <a>Twitter</a>
        </div>
      </div>
    </footer>
  );
};
