'use client'

import { ChangeEvent, useState } from 'react'

export function MediaPicker() {
  const [preview, setPreview] = useState<string | null>(null)
  const onFileSelected = (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target

    if (!files) return

    const previewURL = URL.createObjectURL(files[0])
    setPreview(previewURL)
  }
  return (
    <>
      <input
        type="file"
        onChange={onFileSelected}
        name="coverUrl"
        id="media"
        className="invisible h-0 w-0"
        accept="image/*"
      />
      {preview && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={preview}
          alt="preview-img"
          className="aspect-video w-full rounded-lg object-cover"
        />
      )}
    </>
  )
}
