import { useState } from "react"
import {
  BRIDE_FULLNAME,
  GROOM_FULLNAME,
  LOCATION,
  WEDDING_DATE,
  WEDDING_DATE_FORMAT,
} from "../../const"
import ktalkIcon from "../../icons/ktalk-icon.png"
import { LazyDiv } from "../lazyDiv"

const baseUrl = import.meta.env.BASE_URL

const getCurrentUrl = () => {
  return window.location.protocol + "//" + window.location.host + baseUrl
}

const getShareText = () => {
  return `${GROOM_FULLNAME} ❤️ ${BRIDE_FULLNAME}의 결혼식에 초대합니다.\n${WEDDING_DATE.format(WEDDING_DATE_FORMAT)}\n${LOCATION}`
}


const copyToClipboard = async (text: string, onSuccess: () => void) => {
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(text)
      onSuccess()
    } else {
      // Fallback for older browsers
      const textArea = document.createElement("textarea")
      textArea.value = text
      textArea.style.position = "fixed"
      textArea.style.left = "-999999px"
      document.body.appendChild(textArea)
      textArea.focus()
      textArea.select()
      try {
        document.execCommand("copy")
        onSuccess()
      } catch (err) {
        console.error("복사 실패:", err)
      }
      document.body.removeChild(textArea)
    }
  } catch (err) {
    console.error("클립보드 복사 실패:", err)
  }
}

export const ShareButton = () => {
  const [showToast, setShowToast] = useState(false)

  const handleCopySuccess = () => {
    setShowToast(true)
    setTimeout(() => {
      setShowToast(false)
    }, 2000)
  }

  const handleShare = async () => {
    const url = getCurrentUrl()
    const text = getShareText()
    const title = `${GROOM_FULLNAME} ❤️ ${BRIDE_FULLNAME}의 결혼식에 초대합니다.`

    // 모바일 감지
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )

    // Web Share API 지원 확인 (모바일 브라우저에서만)
    if (isMobile && navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: text,
          url: url,
        })
      } catch (err) {
        // 사용자가 공유를 취소한 경우
        if ((err as Error).name !== "AbortError") {
          console.error("공유 실패:", err)
          // Web Share API 실패 시 클립보드 복사로 fallback (URL만)
          copyToClipboard(url, handleCopySuccess)
        }
      }
    } else {
      // 웹(데스크톱) 또는 Web Share API를 지원하지 않는 경우: 클립보드에 URL만 복사
      copyToClipboard(url, handleCopySuccess)
    }
  }

  return (
    <LazyDiv className="footer share-button">
      <button className="ktalk-share" onClick={handleShare}>
        <img src={ktalkIcon} alt="ktalk-icon" /> 공유하기
      </button>
      {showToast && (
        <div className="toast-message">복사가 완료되었습니다</div>
      )}
    </LazyDiv>
  )
}
