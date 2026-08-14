type FileEntry = {
  name: string;
  extensions: string[];
};

export function FileList({ files }: { files: FileEntry[] }) {
  return (
    <div className="flex w-full flex-col items-start">
      {files.map((file, i) => (
        <div
          key={i}
          className="flex w-full items-center gap-2 border-t border-border-subtle px-6 py-5"
        >
          <div className="flex flex-col items-start gap-0.5">
            <p className="text-base text-fg-default">{file.name}</p>
            <div className="flex items-start gap-2">
              {file.extensions.map((ext) => (
                <span
                  key={ext}
                  className="flex items-center justify-center rounded-lg border border-border-subtle bg-white/5 px-2 py-0.5 text-xs font-semibold text-fg-default"
                >
                  {ext}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
