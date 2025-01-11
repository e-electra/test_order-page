export default function (mode) {
    return {
        pages_root_path: mode === 'development' ? '/' : '/',
        assets_root_path: mode === 'development' ? '/src/' : '/',
        link_to: '',
    }
}
