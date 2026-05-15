import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { cn } from '@/lib/utils';

type Props = {
    content: string;
    className?: string;
};

const MarkdownRenderer = ({ content, className }: Props) => {
    return (
        <div className={cn('space-y-3 leading-relaxed', className)}>
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                    p: ({ children }) => (
                        <p className="mb-3 last:mb-0">{children}</p>
                    ),
                    a: ({ children, href }) => (
                        <a
                            href={href}
                            target="_blank"
                            rel="noreferrer"
                            className="text-orange-400 underline underline-offset-4"
                        >
                            {children}
                        </a>
                    ),
                    ul: ({ children }) => (
                        <ul className="ml-5 list-disc space-y-1">
                            {children}
                        </ul>
                    ),
                    ol: ({ children }) => (
                        <ol className="ml-5 list-decimal space-y-1">
                            {children}
                        </ol>
                    ),
                    li: ({ children }) => (
                        <li className="marker:text-orange-400">{children}</li>
                    ),
                    strong: ({ children }) => (
                        <strong className="font-semibold text-foreground">
                            {children}
                        </strong>
                    ),
                }}
            >
                {content}
            </ReactMarkdown>
        </div>
    );
};

export default MarkdownRenderer;