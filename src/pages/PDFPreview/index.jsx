import React from 'react'
import PDFExport from '@components/PDFExport'
import { usePDF } from '@react-pdf/renderer'
import { useLocation } from 'react-router'

export default function PDFPreview() {
  const { state } = useLocation()

  const [instance] = usePDF({
    document: <PDFExport boardName={state?.boardName} />,
  })

  return (
    <embed
      src={instance.url}
      type="application/pdf"
      frameBorder="0"
      scrolling="auto"
      height="100%"
      width="100%"
    ></embed>
  )
}
