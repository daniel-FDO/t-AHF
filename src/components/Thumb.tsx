import { useState } from 'react'

// Remote image with a branded fallback if it fails to load.
export function Thumb({
  src,
  label,
  className = '',
}: {
  src?: string
  label: string
  className?: string
}) {
  const [failed, setFailed] = useState(false)

  if (!src || failed) {
    return (
      <div className={`thumb thumb-fallback ${className}`} aria-hidden="true">
        <span>{label}</span>
      </div>
    )
  }

  return (
    <img
      className={`thumb ${className}`}
      src={src}
      alt=""
      loading="lazy"
      onError={() => setFailed(true)}
    />
  )
}

export function Headshot({
  src,
  name,
  alt = `Portrait of ${name}`,
  className = '',
}: {
  src: string
  name: string
  alt?: string
  className?: string
}) {
  const [failed, setFailed] = useState(false)
  const initials = name
    .split(' ')
    .map((part) => part[0])
    .filter((_, i, all) => i === 0 || i === all.length - 1)
    .join('')

  if (failed) {
    return (
      <div
        className={`headshot headshot-fallback ${className}`}
        role={alt ? 'img' : undefined}
        aria-label={alt || undefined}
        aria-hidden={alt ? undefined : true}
      >
        {initials}
      </div>
    )
  }

  return (
    <img
      className={`headshot ${className}`}
      src={src}
      alt={alt}
      onError={() => setFailed(true)}
    />
  )
}
