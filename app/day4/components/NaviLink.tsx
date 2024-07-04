import Link from "next/link";

type NaviLinkProps = {
    href: string;
    children: React.ReactNode;
};


export function NaviLink({ href, children } : NaviLinkProps ) {
    return (
        <Link href={href}
              style={{ marginRight: '10px', color: 'blue', textDecoration: 'underline' }}
        >
            {children}
        </Link>
    );
}
