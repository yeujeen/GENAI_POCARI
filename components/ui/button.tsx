// components/ui/button.tsx

import * as React from "react" // React import 추가

// Button의 variant 타입 정의 (Tailwind CSS 기반 임시 타입)
// 실제 shadcn/ui 코드는 더욱 복잡하지만, 오류 해결을 위해 간단히 정의합니다.
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  // variant 속성을 추가하고 'default' 또는 'outline'으로 지정합니다.
  variant?: "default" | "outline" | "ghost" | "link" 
}

export function Button({ 
  className, 
  variant = "default", // 기본값을 'default'로 설정
  children, 
  ...props 
}: ButtonProps) {
  
  // variant에 따라 다른 기본 스타일을 적용하는 임시 로직
  const baseClasses = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none"
  
  let variantClasses = ""
  switch (variant) {
    case "outline":
      // ResultsPage에서 사용하는 variant="outline"에 대한 스타일
      variantClasses = "border border-input bg-background hover:bg-accent hover:text-accent-foreground"
      break
    case "default":
    default:
      // 기본 버튼 스타일 (MainPage에서 주로 사용)
      variantClasses = "bg-primary text-primary-foreground hover:bg-primary/90"
      break
  }

  return (
    <button
      className={`${baseClasses} ${variantClasses} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}