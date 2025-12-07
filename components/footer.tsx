export default function Footer() {
  return (
    <footer className="border-t border-border py-8 bg-card/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-center items-center text-center md:text-left">
          <div>
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Asif Iqbal Munna. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
