import Image from "next/image";

type OptimizedImageProps = {
    src: string;
    alt: string;
    width: number;
    height: number;
};

export function OptimizedImage({ src, alt, width, height } : OptimizedImageProps) {
    return (
        <div style={{ margin: '20px 0' }}>
            <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                style={{ width: '100%', height: 'auto'}}
            />
        </div>
    );
}
