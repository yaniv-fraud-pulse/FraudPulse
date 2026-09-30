import MetaPixel from './components/MetaPixel';

export default function LpLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MetaPixel />
      {children}
    </>
  );
}
