def km(macro)
    "osascript -e 'tell application \"Keyboard Maestro Engine\" do script \"" + macro + "\" end tell"
end

def alfred(trigger, workflow)
    "osascript -e tell application \"Alfred 3\" to run trigger \"" + trigger + "\" in workflow \"" + workflow + "\" with argument \"\""
end

def sticky_s()
    sticky()
end

def sticky()
    # how to return sticky_s here
    caller[0][/`.*'/][1..-2]
end

print(sticky_s())
