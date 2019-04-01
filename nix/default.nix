(import <nixpkgs> { config = {}; }).python.withPackages (p: [p.pyside p.pysideTools p.twisted])
