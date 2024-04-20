export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='test-red'>
      {children}
    </div>
  )
}
