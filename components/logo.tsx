import Image from "next/image";
import Link from "next/link";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="brand">
      <Image
        src="/one-search-logo.jpg"
        width={96}
        height={96}
        priority
        className="brand__mark"
        alt=""
      />
      {!compact && (
        <span className="brand__wordmark">
          <strong>One Search</strong>
          <small>Privacy center</small>
        </span>
      )}
    </Link>
  );
}
