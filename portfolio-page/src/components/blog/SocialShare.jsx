// src/components/blog/SocialShare.jsx
import React, { useState } from 'react';
import { Share2, Check, Copy, Twitter, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { logEvent } from '@/utils/analytics';

const SocialShare = ({ url, title, excerpt = '' }) => {
  const [copied, setCopied] = useState(false);

  const fullUrl = url.startsWith('http') ? url : `https://yogeshbhavsar.com${url}`;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(fullUrl);
      setCopied(true);
      logEvent('Blog', 'share_copy_link', title);
      setTimeout(() => setCopied(false), 2500);
    } catch (e) {
      console.warn('Copy failed', e);
    }
  };

  const shareOnTwitter = () => {
    logEvent('Blog', 'share_twitter', title);
    const tweetText = encodeURIComponent(`"${title}" by @Yogesh04rock\n\n${fullUrl}`);
    window.open(`https://twitter.com/intent/tweet?text=${tweetText}`, '_blank', 'noopener,noreferrer');
  };

  const shareOnLinkedIn = () => {
    logEvent('Blog', 'share_linkedin', title);
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(fullUrl)}`;
    window.open(linkedInUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="flex flex-wrap items-center gap-2.5 py-4 my-6 border-y border-border/50">
      <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground mr-2 flex items-center gap-1.5 font-semibold">
        <Share2 className="h-3.5 w-3.5" />
        <span>Share</span>
      </span>

      <Button
        variant="outline"
        size="sm"
        onClick={shareOnTwitter}
        className="h-8 px-3 text-xs gap-1.5 hover:text-[#1DA1F2] hover:border-[#1DA1F2]/40"
        aria-label="Share on X (formerly Twitter)"
      >
        <Twitter className="h-3.5 w-3.5" />
        <span>Post</span>
      </Button>

      <Button
        variant="outline"
        size="sm"
        onClick={shareOnLinkedIn}
        className="h-8 px-3 text-xs gap-1.5 hover:text-[#0A66C2] hover:border-[#0A66C2]/40"
        aria-label="Share on LinkedIn"
      >
        <Linkedin className="h-3.5 w-3.5" />
        <span>Share</span>
      </Button>

      <Button
        variant="outline"
        size="sm"
        onClick={handleCopyLink}
        className="h-8 px-3 text-xs gap-1.5 hover:text-primary hover:border-primary/40"
        aria-label="Copy link to article"
      >
        {copied ? (
          <>
            <Check className="h-3.5 w-3.5 text-emerald-500" />
            <span className="text-emerald-500 font-medium">Link Copied!</span>
          </>
        ) : (
          <>
            <Copy className="h-3.5 w-3.5" />
            <span>Copy Link</span>
          </>
        )}
      </Button>
    </div>
  );
};

export default SocialShare;
