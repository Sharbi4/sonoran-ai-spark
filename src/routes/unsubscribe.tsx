import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useState } from 'react';

export const Route = createFileRoute('/unsubscribe')({
  component: UnsubscribePage,
  validateSearch: (search: Record<string, unknown>) => ({
    token: typeof search.token === 'string' ? search.token : '',
  }),
});

function UnsubscribePage() {
  const { token } = Route.useSearch();
  const [state, setState] = useState<
    'loading' | 'valid' | 'already' | 'invalid' | 'working' | 'done' | 'error'
  >('loading');

  useEffect(() => {
    if (!token) {
      setState('invalid');
      return;
    }
    fetch(`/email/unsubscribe?token=${encodeURIComponent(token)}`)
      .then((r) => r.json())
      .then((d) => {
        if (d.valid) setState('valid');
        else if (d.reason === 'already_unsubscribed') setState('already');
        else setState('invalid');
      })
      .catch(() => setState('error'));
  }, [token]);

  const confirm = async () => {
    setState('working');
    try {
      const r = await fetch('/email/unsubscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token }),
      });
      const d = await r.json();
      if (d.success) setState('done');
      else if (d.reason === 'already_unsubscribed') setState('already');
      else setState('error');
    } catch {
      setState('error');
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md w-full rounded-lg border border-border bg-card p-8 text-center">
        <h1 className="text-2xl font-semibold text-foreground">Unsubscribe</h1>
        <div className="mt-4 text-sm text-muted-foreground">
          {state === 'loading' && 'Checking your link…'}
          {state === 'valid' && 'Click below to confirm you no longer want emails from us.'}
          {state === 'working' && 'Processing…'}
          {state === 'done' && "You're unsubscribed. We won't email you again."}
          {state === 'already' && "You're already unsubscribed."}
          {state === 'invalid' && 'This unsubscribe link is invalid or expired.'}
          {state === 'error' && 'Something went wrong. Please try again later.'}
        </div>
        {state === 'valid' && (
          <button
            onClick={confirm}
            className="mt-6 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Confirm unsubscribe
          </button>
        )}
      </div>
    </div>
  );
}