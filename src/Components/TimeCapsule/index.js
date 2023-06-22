import { useEffect, useRef } from 'react'
import UploadWidget from './UploadWidget'
import './styles.css'
import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from 'react-router'

function TimeCapsule() {
  // auth0 code
  const { isAuthenticated } = useAuth0()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuthenticated) {
      // User is logged in, redirect to dashboard
      navigate('/login')
    }
  }, [isAuthenticated, navigate])
  // end auth0 code

  const containerRef = useRef(null)

  useEffect(() => {
    if (window.cloudinary && containerRef.current) {
      const widget = window.cloudinary.galleryWidget({
        container: containerRef.current,
        cloudName: 'dcdmhdqbi', // Replace with your actual Cloudinary cloud name
        mediaAssets: [{ tag: 'gallery' }], // Replace with your desired tag or remove if not needed
        displayProps: {
          mode: 'expanded',
          columns: 3,
          spacing: 15,
        },
        zoomProps: {
          type: 'popup',
          steps: 3,
        },
        aspectRatio: '1:1',
        transformation: {
          crop: 'fill',
        },
        imageBreakpoint: 1000,
      })
      widget.render() // Call render() separately after configuring the widget
    }
  }, [])

  function galleryRefresh() {
    const widget = window.cloudinary.galleryWidget({
      container: containerRef.current,
      cloudName: 'dcdmhdqbi', // Replace with your actual Cloudinary cloud name
      mediaAssets: [{ tag: 'gallery' }], // Replace with your desired tag or remove if not needed
      displayProps: {
        mode: 'expanded',
        columns: 3,
        spacing: 15,
      },

      zoomProps: {
        type: 'popup',
        steps: 3,
      },
      aspectRatio: '1:1',
      transformation: {
        crop: 'fill',
      },
      imageBreakpoint: 1000,
    })
    widget.render()
    console.log('refresh called')
  }

  return (
    isAuthenticated && (
      <div>
        <h1 className="page-title">Time Capsule</h1>
        <div
          className="gallery-grid"
          ref={containerRef}
          style={{ width: '1200px', margin: 'auto' }}
        />
        <UploadWidget refreshClick={galleryRefresh} />
        <button className="refresh-button" onClick={galleryRefresh}>
          Refresh
        </button>
      </div>
    )
  )
}

export default TimeCapsule
